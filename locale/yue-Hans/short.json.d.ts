import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yue-Hans';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;