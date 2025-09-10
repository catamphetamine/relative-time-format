import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'rhg';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;