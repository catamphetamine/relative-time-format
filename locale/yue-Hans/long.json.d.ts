import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yue-Hans';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;