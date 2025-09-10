import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'blo';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;