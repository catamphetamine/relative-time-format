import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sv';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;