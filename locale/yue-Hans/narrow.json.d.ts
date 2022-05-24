import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yue-Hans';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;