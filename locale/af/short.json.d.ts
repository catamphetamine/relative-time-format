import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'af';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;