import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'rhg';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;