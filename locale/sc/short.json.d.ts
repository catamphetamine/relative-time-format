import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sc';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;