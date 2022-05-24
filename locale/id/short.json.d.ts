import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'id';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;