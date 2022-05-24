import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BM';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;